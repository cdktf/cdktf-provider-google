# `dataGoogleNetworkSecurityAddressGroupIamPolicy` Submodule <a name="`dataGoogleNetworkSecurityAddressGroupIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkSecurityAddressGroupIamPolicy <a name="DataGoogleNetworkSecurityAddressGroupIamPolicy" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy google_network_security_address_group_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.Initializer"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroupIamPolicy } from '@cdktf/provider-google'

new dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy(scope: Construct, id: string, config: DataGoogleNetworkSecurityAddressGroupIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig">DataGoogleNetworkSecurityAddressGroupIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig">DataGoogleNetworkSecurityAddressGroupIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleNetworkSecurityAddressGroupIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroupIamPolicy } from '@cdktf/provider-google'

dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroupIamPolicy } from '@cdktf/provider-google'

dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroupIamPolicy } from '@cdktf/provider-google'

dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroupIamPolicy } from '@cdktf/provider-google'

dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleNetworkSecurityAddressGroupIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkSecurityAddressGroupIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkSecurityAddressGroupIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkSecurityAddressGroupIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkSecurityAddressGroupIamPolicyConfig <a name="DataGoogleNetworkSecurityAddressGroupIamPolicyConfig" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleNetworkSecurityAddressGroupIamPolicy } from '@cdktf/provider-google'

const dataGoogleNetworkSecurityAddressGroupIamPolicyConfig: dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#name DataGoogleNetworkSecurityAddressGroupIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#id DataGoogleNetworkSecurityAddressGroupIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#location DataGoogleNetworkSecurityAddressGroupIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#project DataGoogleNetworkSecurityAddressGroupIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#name DataGoogleNetworkSecurityAddressGroupIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#id DataGoogleNetworkSecurityAddressGroupIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#location DataGoogleNetworkSecurityAddressGroupIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleNetworkSecurityAddressGroupIamPolicy.DataGoogleNetworkSecurityAddressGroupIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_security_address_group_iam_policy#project DataGoogleNetworkSecurityAddressGroupIamPolicy#project}.

---



