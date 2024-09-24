# `discoveryEngineSchema` Submodule <a name="`discoveryEngineSchema` Submodule" id="@cdktf/provider-google.discoveryEngineSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSchema <a name="DiscoveryEngineSchema" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema google_discovery_engine_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.Initializer"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

new discoveryEngineSchema.DiscoveryEngineSchema(scope: Construct, id: string, config: DiscoveryEngineSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig">DiscoveryEngineSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig">DiscoveryEngineSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetJsonSchema">resetJsonSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineSchemaTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts">DiscoveryEngineSchemaTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJsonSchema` <a name="resetJsonSchema" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetJsonSchema"></a>

```typescript
public resetJsonSchema(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineSchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isConstruct"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

discoveryEngineSchema.DiscoveryEngineSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isTerraformElement"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

discoveryEngineSchema.DiscoveryEngineSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isTerraformResource"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

discoveryEngineSchema.DiscoveryEngineSchema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.generateConfigForImport"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

discoveryEngineSchema.DiscoveryEngineSchema.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DiscoveryEngineSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference">DiscoveryEngineSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.dataStoreIdInput">dataStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.jsonSchemaInput">jsonSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts">DiscoveryEngineSchemaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineSchemaTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference">DiscoveryEngineSchemaTimeoutsOutputReference</a>

---

##### `dataStoreIdInput`<sup>Optional</sup> <a name="dataStoreIdInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.dataStoreIdInput"></a>

```typescript
public readonly dataStoreIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jsonSchemaInput`<sup>Optional</sup> <a name="jsonSchemaInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.jsonSchemaInput"></a>

```typescript
public readonly jsonSchemaInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineSchemaTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts">DiscoveryEngineSchemaTimeouts</a>

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSchemaConfig <a name="DiscoveryEngineSchemaConfig" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.Initializer"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

const discoveryEngineSchemaConfig: discoveryEngineSchema.DiscoveryEngineSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.schemaId">schemaId</a></code> | <code>string</code> | The unique id of the schema. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#id DiscoveryEngineSchema#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.jsonSchema">jsonSchema</a></code> | <code>string</code> | The JSON representation of the schema. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#project DiscoveryEngineSchema#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts">DiscoveryEngineSchemaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#data_store_id DiscoveryEngineSchema#data_store_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#location DiscoveryEngineSchema#location}

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

The unique id of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#schema_id DiscoveryEngineSchema#schema_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#id DiscoveryEngineSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jsonSchema`<sup>Optional</sup> <a name="jsonSchema" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: string;
```

- *Type:* string

The JSON representation of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#json_schema DiscoveryEngineSchema#json_schema}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#project DiscoveryEngineSchema#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineSchemaTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts">DiscoveryEngineSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#timeouts DiscoveryEngineSchema#timeouts}

---

### DiscoveryEngineSchemaTimeouts <a name="DiscoveryEngineSchemaTimeouts" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts.Initializer"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

const discoveryEngineSchemaTimeouts: discoveryEngineSchema.DiscoveryEngineSchemaTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#create DiscoveryEngineSchema#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#delete DiscoveryEngineSchema#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#create DiscoveryEngineSchema#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/discovery_engine_schema#delete DiscoveryEngineSchema#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineSchemaTimeoutsOutputReference <a name="DiscoveryEngineSchemaTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineSchema } from '@cdktf/provider-google'

new discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts">DiscoveryEngineSchemaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineSchemaTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineSchema.DiscoveryEngineSchemaTimeouts">DiscoveryEngineSchemaTimeouts</a>

---



