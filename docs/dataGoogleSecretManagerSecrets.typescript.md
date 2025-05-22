# `dataGoogleSecretManagerSecrets` Submodule <a name="`dataGoogleSecretManagerSecrets` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecrets <a name="DataGoogleSecretManagerSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/secret_manager_secrets google_secret_manager_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets(scope: Construct, id: string, config?: DataGoogleSecretManagerSecretsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig">DataGoogleSecretManagerSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig">DataGoogleSecretManagerSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleSecretManagerSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecretManagerSecrets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecretManagerSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/secret_manager_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList">DataGoogleSecretManagerSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.secrets"></a>

```typescript
public readonly secrets: DataGoogleSecretManagerSecretsSecretsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList">DataGoogleSecretManagerSecretsSecretsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretsConfig <a name="DataGoogleSecretManagerSecretsConfig" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsConfig: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.filter">filter</a></code> | <code>string</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/secret_manager_secrets#filter DataGoogleSecretManagerSecrets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}.

---

### DataGoogleSecretManagerSecretsSecrets <a name="DataGoogleSecretManagerSecretsSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecrets: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets = { ... }
```


### DataGoogleSecretManagerSecretsSecretsReplication <a name="DataGoogleSecretManagerSecretsSecretsReplication" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsReplication: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication = { ... }
```


### DataGoogleSecretManagerSecretsSecretsReplicationAuto <a name="DataGoogleSecretManagerSecretsSecretsReplicationAuto" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsReplicationAuto: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto = { ... }
```


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption = { ... }
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManaged <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsReplicationUserManaged: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged = { ... }
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas = { ... }
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption = { ... }
```


### DataGoogleSecretManagerSecretsSecretsRotation <a name="DataGoogleSecretManagerSecretsSecretsRotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsRotation: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation = { ... }
```


### DataGoogleSecretManagerSecretsSecretsTopics <a name="DataGoogleSecretManagerSecretsSecretsTopics" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretsSecretsTopics: dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerSecretsSecretsList <a name="DataGoogleSecretManagerSecretsSecretsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsOutputReference <a name="DataGoogleSecretManagerSecretsSecretsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList">DataGoogleSecretManagerSecretsSecretsReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList">DataGoogleSecretManagerSecretsSecretsRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList">DataGoogleSecretManagerSecretsSecretsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionAliases">versionAliases</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionDestroyTtl">versionDestroyTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets">DataGoogleSecretManagerSecretsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.replication"></a>

```typescript
public readonly replication: DataGoogleSecretManagerSecretsSecretsReplicationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList">DataGoogleSecretManagerSecretsSecretsReplicationList</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.rotation"></a>

```typescript
public readonly rotation: DataGoogleSecretManagerSecretsSecretsRotationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList">DataGoogleSecretManagerSecretsSecretsRotationList</a>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.topics"></a>

```typescript
public readonly topics: DataGoogleSecretManagerSecretsSecretsTopicsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList">DataGoogleSecretManagerSecretsSecretsTopicsList</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionAliases"></a>

```typescript
public readonly versionAliases: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `versionDestroyTtl`<sup>Required</sup> <a name="versionDestroyTtl" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionDestroyTtl"></a>

```typescript
public readonly versionDestroyTtl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecrets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets">DataGoogleSecretManagerSecretsSecrets</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoList <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto">DataGoogleSecretManagerSecretsSecretsReplicationAuto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsReplicationAuto;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto">DataGoogleSecretManagerSecretsSecretsReplicationAuto</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationList <a name="DataGoogleSecretManagerSecretsSecretsReplicationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsReplicationOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.auto">auto</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList">DataGoogleSecretManagerSecretsSecretsReplicationAutoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.userManaged">userManaged</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication">DataGoogleSecretManagerSecretsSecretsReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.auto"></a>

```typescript
public readonly auto: DataGoogleSecretManagerSecretsSecretsReplicationAutoList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList">DataGoogleSecretManagerSecretsSecretsReplicationAutoList</a>

---

##### `userManaged`<sup>Required</sup> <a name="userManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.userManaged"></a>

```typescript
public readonly userManaged: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsReplication;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication">DataGoogleSecretManagerSecretsSecretsReplication</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged">DataGoogleSecretManagerSecretsSecretsReplicationUserManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.replicas"></a>

```typescript
public readonly replicas: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsReplicationUserManaged;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged">DataGoogleSecretManagerSecretsSecretsReplicationUserManaged</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas</a>

---


### DataGoogleSecretManagerSecretsSecretsRotationList <a name="DataGoogleSecretManagerSecretsSecretsRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsRotationOutputReference <a name="DataGoogleSecretManagerSecretsSecretsRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation">DataGoogleSecretManagerSecretsSecretsRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.nextRotationTime"></a>

```typescript
public readonly nextRotationTime: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsRotation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation">DataGoogleSecretManagerSecretsSecretsRotation</a>

---


### DataGoogleSecretManagerSecretsSecretsTopicsList <a name="DataGoogleSecretManagerSecretsSecretsTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretsSecretsTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretsSecretsTopicsOutputReference <a name="DataGoogleSecretManagerSecretsSecretsTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecrets } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics">DataGoogleSecretManagerSecretsSecretsTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretsSecretsTopics;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics">DataGoogleSecretManagerSecretsSecretsTopics</a>

---



