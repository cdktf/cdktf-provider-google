# `dataGoogleAccessContextManagerAccessPolicyIamPolicy` Submodule <a name="`dataGoogleAccessContextManagerAccessPolicyIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerAccessPolicyIamPolicy <a name="DataGoogleAccessContextManagerAccessPolicyIamPolicy" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/data-sources/access_context_manager_access_policy_iam_policy google_access_context_manager_access_policy_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerAccessPolicyIamPolicy } from '@cdktf/provider-google'

new dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy(scope: Construct, id: string, config: DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig">DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig">DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleAccessContextManagerAccessPolicyIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleAccessContextManagerAccessPolicyIamPolicy } from '@cdktf/provider-google'

dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleAccessContextManagerAccessPolicyIamPolicy } from '@cdktf/provider-google'

dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleAccessContextManagerAccessPolicyIamPolicy } from '@cdktf/provider-google'

dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleAccessContextManagerAccessPolicyIamPolicy } from '@cdktf/provider-google'

dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleAccessContextManagerAccessPolicyIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAccessContextManagerAccessPolicyIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAccessContextManagerAccessPolicyIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/data-sources/access_context_manager_access_policy_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerAccessPolicyIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig <a name="DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerAccessPolicyIamPolicy } from '@cdktf/provider-google'

const dataGoogleAccessContextManagerAccessPolicyIamPolicyConfig: dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/data-sources/access_context_manager_access_policy_iam_policy#name DataGoogleAccessContextManagerAccessPolicyIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/data-sources/access_context_manager_access_policy_iam_policy#id DataGoogleAccessContextManagerAccessPolicyIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/data-sources/access_context_manager_access_policy_iam_policy#name DataGoogleAccessContextManagerAccessPolicyIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessContextManagerAccessPolicyIamPolicy.DataGoogleAccessContextManagerAccessPolicyIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/data-sources/access_context_manager_access_policy_iam_policy#id DataGoogleAccessContextManagerAccessPolicyIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



