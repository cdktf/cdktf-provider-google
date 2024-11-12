# `dataGoogleContainerAwsVersions` Submodule <a name="`dataGoogleContainerAwsVersions` Submodule" id="@cdktf/provider-google.dataGoogleContainerAwsVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerAwsVersions <a name="DataGoogleContainerAwsVersions" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions google_container_aws_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.Initializer"></a>

```typescript
import { dataGoogleContainerAwsVersions } from '@cdktf/provider-google'

new dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions(scope: Construct, id: string, config?: DataGoogleContainerAwsVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig">DataGoogleContainerAwsVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig">DataGoogleContainerAwsVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleContainerAwsVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isConstruct"></a>

```typescript
import { dataGoogleContainerAwsVersions } from '@cdktf/provider-google'

dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformElement"></a>

```typescript
import { dataGoogleContainerAwsVersions } from '@cdktf/provider-google'

dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformDataSource"></a>

```typescript
import { dataGoogleContainerAwsVersions } from '@cdktf/provider-google'

dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.generateConfigForImport"></a>

```typescript
import { dataGoogleContainerAwsVersions } from '@cdktf/provider-google'

dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleContainerAwsVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleContainerAwsVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleContainerAwsVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleContainerAwsVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.supportedRegions">supportedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.validVersions">validVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `supportedRegions`<sup>Required</sup> <a name="supportedRegions" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.supportedRegions"></a>

```typescript
public readonly supportedRegions: string[];
```

- *Type:* string[]

---

##### `validVersions`<sup>Required</sup> <a name="validVersions" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.validVersions"></a>

```typescript
public readonly validVersions: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerAwsVersionsConfig <a name="DataGoogleContainerAwsVersionsConfig" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.Initializer"></a>

```typescript
import { dataGoogleContainerAwsVersions } from '@cdktf/provider-google'

const dataGoogleContainerAwsVersionsConfig: dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions#id DataGoogleContainerAwsVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions#location DataGoogleContainerAwsVersions#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions#project DataGoogleContainerAwsVersions#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions#id DataGoogleContainerAwsVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions#location DataGoogleContainerAwsVersions#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAwsVersions.DataGoogleContainerAwsVersionsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/container_aws_versions#project DataGoogleContainerAwsVersions#project}.

---



