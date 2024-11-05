# `dataGoogleComputeSecurityPolicy` Submodule <a name="`dataGoogleComputeSecurityPolicy` Submodule" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeSecurityPolicy <a name="DataGoogleComputeSecurityPolicy" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_security_policy google_compute_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicy(scope Construct, id *string, config DataGoogleComputeSecurityPolicyConfig) DataGoogleComputeSecurityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig">DataGoogleComputeSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig">DataGoogleComputeSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetSelfLink">ResetSelfLink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSelfLink` <a name="ResetSelfLink" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetSelfLink"></a>

```go
func ResetSelfLink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComputeSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.adaptiveProtectionConfig">AdaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.recaptchaOptionsConfig">RecaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList">DataGoogleComputeSecurityPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLinkInput">SelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdaptiveProtectionConfig`<sup>Required</sup> <a name="AdaptiveProtectionConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.adaptiveProtectionConfig"></a>

```go
func AdaptiveProtectionConfig() DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList</a>

---

##### `AdvancedOptionsConfig`<sup>Required</sup> <a name="AdvancedOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.advancedOptionsConfig"></a>

```go
func AdvancedOptionsConfig() DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `RecaptchaOptionsConfig`<sup>Required</sup> <a name="RecaptchaOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.recaptchaOptionsConfig"></a>

```go
func RecaptchaOptionsConfig() DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.rule"></a>

```go
func Rule() DataGoogleComputeSecurityPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList">DataGoogleComputeSecurityPolicyRuleList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SelfLinkInput`<sup>Optional</sup> <a name="SelfLinkInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLinkInput"></a>

```go
func SelfLinkInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig {

}
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {

}
```


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfig <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig {

}
```


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {

}
```


### DataGoogleComputeSecurityPolicyConfig <a name="DataGoogleComputeSecurityPolicyConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
	Project: *string,
	SelfLink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_security_policy#id DataGoogleComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.selfLink">SelfLink</a></code> | <code>*string</code> | The URI of the created resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_security_policy#id DataGoogleComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_security_policy#name DataGoogleComputeSecurityPolicy#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_security_policy#project DataGoogleComputeSecurityPolicy#project}

---

##### `SelfLink`<sup>Optional</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.selfLink"></a>

```go
SelfLink *string
```

- *Type:* *string

The URI of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_security_policy#self_link DataGoogleComputeSecurityPolicy#self_link}

---

### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig {

}
```


### DataGoogleComputeSecurityPolicyRule <a name="DataGoogleComputeSecurityPolicyRule" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRule {

}
```


### DataGoogleComputeSecurityPolicyRuleHeaderAction <a name="DataGoogleComputeSecurityPolicyRuleHeaderAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction {

}
```


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds {

}
```


### DataGoogleComputeSecurityPolicyRuleMatch <a name="DataGoogleComputeSecurityPolicyRuleMatch" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleMatch {

}
```


### DataGoogleComputeSecurityPolicyRuleMatchConfig <a name="DataGoogleComputeSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig {

}
```


### DataGoogleComputeSecurityPolicyRuleMatchExpr <a name="DataGoogleComputeSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr {

}
```


### DataGoogleComputeSecurityPolicyRuleMatchExprOptions <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions {

}
```


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions {

}
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptions <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions {

}
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold {

}
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {

}
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold {

}
```


### DataGoogleComputeSecurityPolicyRuleRedirectOptions <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

&datagooglecomputesecuritypolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable">Enable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility">RuleVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RuleVisibility`<sup>Required</sup> <a name="RuleVisibility" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility"></a>

```go
func RuleVisibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig">Layer7DdosDefenseConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Layer7DdosDefenseConfig`<sup>Required</sup> <a name="Layer7DdosDefenseConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig"></a>

```go
func Layer7DdosDefenseConfig() DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig</a>

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">ContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```go
func ContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdvancedOptionsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">JsonParsing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonCustomConfig`<sup>Required</sup> <a name="JsonCustomConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```go
func JsonCustomConfig() DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a>

---

##### `JsonParsing`<sup>Required</sup> <a name="JsonParsing" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```go
func JsonParsing() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `UserIpRequestHeaders`<sup>Required</sup> <a name="UserIpRequestHeaders" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```go
func UserIpRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfig</a>

---


### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey">RedirectSiteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectSiteKey`<sup>Required</sup> <a name="RedirectSiteKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey"></a>

```go
func RedirectSiteKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionList <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleHeaderActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleHeaderActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction">DataGoogleComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeadersToAdds`<sup>Required</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```go
func RequestHeadersToAdds() DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction">DataGoogleComputeSecurityPolicyRuleHeaderAction</a>

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>

---


### DataGoogleComputeSecurityPolicyRuleList <a name="DataGoogleComputeSecurityPolicyRuleList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleMatchConfigList <a name="DataGoogleComputeSecurityPolicyRuleMatchConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleMatchConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig">DataGoogleComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig">DataGoogleComputeSecurityPolicyRuleMatchConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchExprList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleMatchExprList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchExprOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions"></a>

```go
func RecaptchaOptions() DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleMatchExprOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionTokenSiteKeys`<sup>Required</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys"></a>

```go
func ActionTokenSiteKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SessionTokenSiteKeys`<sup>Required</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys"></a>

```go
func SessionTokenSiteKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchExprOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr">DataGoogleComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr">DataGoogleComputeSecurityPolicyRuleMatchExpr</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchList <a name="DataGoogleComputeSecurityPolicyRuleMatchList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleMatchOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList">DataGoogleComputeSecurityPolicyRuleMatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList">DataGoogleComputeSecurityPolicyRuleMatchExprList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch">DataGoogleComputeSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.config"></a>

```go
func Config() DataGoogleComputeSecurityPolicyRuleMatchConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList">DataGoogleComputeSecurityPolicyRuleMatchConfigList</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```go
func Expr() DataGoogleComputeSecurityPolicyRuleMatchExprList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList">DataGoogleComputeSecurityPolicyRuleMatchExprList</a>

---

##### `ExprOptions`<sup>Required</sup> <a name="ExprOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions"></a>

```go
func ExprOptions() DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList</a>

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch">DataGoogleComputeSecurityPolicyRuleMatch</a>

---


### DataGoogleComputeSecurityPolicyRuleOutputReference <a name="DataGoogleComputeSecurityPolicyRuleOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList">DataGoogleComputeSecurityPolicyRuleHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList">DataGoogleComputeSecurityPolicyRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preview">Preview</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRedirectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule">DataGoogleComputeSecurityPolicyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.headerAction"></a>

```go
func HeaderAction() DataGoogleComputeSecurityPolicyRuleHeaderActionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList">DataGoogleComputeSecurityPolicyRuleHeaderActionList</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.match"></a>

```go
func Match() DataGoogleComputeSecurityPolicyRuleMatchList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList">DataGoogleComputeSecurityPolicyRuleMatchList</a>

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preview"></a>

```go
func Preview() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions"></a>

```go
func RateLimitOptions() DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList</a>

---

##### `RedirectOptions`<sup>Required</sup> <a name="RedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.redirectOptions"></a>

```go
func RedirectOptions() DataGoogleComputeSecurityPolicyRuleRedirectOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRedirectOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule">DataGoogleComputeSecurityPolicyRule</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```go
func BanDurationSec() *f64
```

- *Type:* *f64

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```go
func BanThreshold() DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList</a>

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```go
func ConformAction() *string
```

- *Type:* *string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```go
func EnforceOnKey() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```go
func ExceedAction() *string
```

- *Type:* *string

---

##### `ExceedRedirectOptions`<sup>Required</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions"></a>

```go
func ExceedRedirectOptions() DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```go
func RateLimitThreshold() DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### DataGoogleComputeSecurityPolicyRuleRedirectOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRedirectOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeSecurityPolicyRuleRedirectOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputesecuritypolicy"

datagooglecomputesecuritypolicy.NewDataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions">DataGoogleComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions">DataGoogleComputeSecurityPolicyRuleRedirectOptions</a>

---



