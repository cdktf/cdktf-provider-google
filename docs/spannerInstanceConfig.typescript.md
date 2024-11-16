# `spannerInstanceConfig` Submodule <a name="`spannerInstanceConfig` Submodule" id="@cdktf/provider-google.spannerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstanceConfigA <a name="SpannerInstanceConfigA" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config google_spanner_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.Initializer"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

new spannerInstanceConfig.SpannerInstanceConfigA(scope: Construct, id: string, config: SpannerInstanceConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig">SpannerInstanceConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig">SpannerInstanceConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.putReplicas">putReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetBaseConfig">resetBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplicas` <a name="putReplicas" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.putReplicas"></a>

```typescript
public putReplicas(value: IResolvable | SpannerInstanceConfigReplicas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.putReplicas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.putTimeouts"></a>

```typescript
public putTimeouts(value: SpannerInstanceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts">SpannerInstanceConfigTimeouts</a>

---

##### `resetBaseConfig` <a name="resetBaseConfig" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetBaseConfig"></a>

```typescript
public resetBaseConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpannerInstanceConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isConstruct"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

spannerInstanceConfig.SpannerInstanceConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isTerraformElement"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

spannerInstanceConfig.SpannerInstanceConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isTerraformResource"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

spannerInstanceConfig.SpannerInstanceConfigA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.generateConfigForImport"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

spannerInstanceConfig.SpannerInstanceConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpannerInstanceConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpannerInstanceConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpannerInstanceConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpannerInstanceConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList">SpannerInstanceConfigReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference">SpannerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.baseConfigInput">baseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.replicasInput">replicasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts">SpannerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.baseConfig">baseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configType`<sup>Required</sup> <a name="configType" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.replicas"></a>

```typescript
public readonly replicas: SpannerInstanceConfigReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList">SpannerInstanceConfigReplicasList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.timeouts"></a>

```typescript
public readonly timeouts: SpannerInstanceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference">SpannerInstanceConfigTimeoutsOutputReference</a>

---

##### `baseConfigInput`<sup>Optional</sup> <a name="baseConfigInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.baseConfigInput"></a>

```typescript
public readonly baseConfigInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.replicasInput"></a>

```typescript
public readonly replicasInput: IResolvable | SpannerInstanceConfigReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpannerInstanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts">SpannerInstanceConfigTimeouts</a>

---

##### `baseConfig`<sup>Required</sup> <a name="baseConfig" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.baseConfig"></a>

```typescript
public readonly baseConfig: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstanceConfigAConfig <a name="SpannerInstanceConfigAConfig" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.Initializer"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

const spannerInstanceConfigAConfig: spannerInstanceConfig.SpannerInstanceConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of this instance configuration as it appears in UIs. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.replicas">replicas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>[]</code> | replicas block. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.baseConfig">baseConfig</a></code> | <code>string</code> | Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#id SpannerInstanceConfigA#id}. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the instance configuration. Values are of the form projects/<project>/instanceConfigs/[a-z][-a-z0-9]*. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#project SpannerInstanceConfigA#project}. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts">SpannerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of this instance configuration as it appears in UIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#display_name SpannerInstanceConfigA#display_name}

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.replicas"></a>

```typescript
public readonly replicas: IResolvable | SpannerInstanceConfigReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>[]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#replicas SpannerInstanceConfigA#replicas}

---

##### `baseConfig`<sup>Optional</sup> <a name="baseConfig" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.baseConfig"></a>

```typescript
public readonly baseConfig: string;
```

- *Type:* string

Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#base_config SpannerInstanceConfigA#base_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#id SpannerInstanceConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#labels SpannerInstanceConfigA#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the instance configuration. Values are of the form projects/<project>/instanceConfigs/[a-z][-a-z0-9]*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#name SpannerInstanceConfigA#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#project SpannerInstanceConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpannerInstanceConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts">SpannerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#timeouts SpannerInstanceConfigA#timeouts}

---

### SpannerInstanceConfigReplicas <a name="SpannerInstanceConfigReplicas" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas.Initializer"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

const spannerInstanceConfigReplicas: spannerInstanceConfig.SpannerInstanceConfigReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas.property.defaultLeaderLocation">defaultLeaderLocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, this location is designated as the default leader location where leader replicas are placed. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas.property.location">location</a></code> | <code>string</code> | The location of the serving resources, e.g. "us-central1". |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas.property.type">type</a></code> | <code>string</code> | Indicates the type of replica.  See the [replica types documentation](https://cloud.google.com/spanner/docs/replication#replica_types) for more details. Possible values: ["READ_WRITE", "READ_ONLY", "WITNESS"]. |

---

##### `defaultLeaderLocation`<sup>Optional</sup> <a name="defaultLeaderLocation" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas.property.defaultLeaderLocation"></a>

```typescript
public readonly defaultLeaderLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, this location is designated as the default leader location where leader replicas are placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#default_leader_location SpannerInstanceConfigA#default_leader_location}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the serving resources, e.g. "us-central1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#location SpannerInstanceConfigA#location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Indicates the type of replica.  See the [replica types documentation](https://cloud.google.com/spanner/docs/replication#replica_types) for more details. Possible values: ["READ_WRITE", "READ_ONLY", "WITNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#type SpannerInstanceConfigA#type}

---

### SpannerInstanceConfigTimeouts <a name="SpannerInstanceConfigTimeouts" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts.Initializer"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

const spannerInstanceConfigTimeouts: spannerInstanceConfig.SpannerInstanceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#create SpannerInstanceConfigA#create}. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#delete SpannerInstanceConfigA#delete}. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#update SpannerInstanceConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#create SpannerInstanceConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#delete SpannerInstanceConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/spanner_instance_config#update SpannerInstanceConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstanceConfigReplicasList <a name="SpannerInstanceConfigReplicasList" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.Initializer"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

new spannerInstanceConfig.SpannerInstanceConfigReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.get"></a>

```typescript
public get(index: number): SpannerInstanceConfigReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpannerInstanceConfigReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>[]

---


### SpannerInstanceConfigReplicasOutputReference <a name="SpannerInstanceConfigReplicasOutputReference" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

new spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resetDefaultLeaderLocation">resetDefaultLeaderLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultLeaderLocation` <a name="resetDefaultLeaderLocation" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resetDefaultLeaderLocation"></a>

```typescript
public resetDefaultLeaderLocation(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocationInput">defaultLeaderLocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocation">defaultLeaderLocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultLeaderLocationInput`<sup>Optional</sup> <a name="defaultLeaderLocationInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocationInput"></a>

```typescript
public readonly defaultLeaderLocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultLeaderLocation`<sup>Required</sup> <a name="defaultLeaderLocation" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocation"></a>

```typescript
public readonly defaultLeaderLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpannerInstanceConfigReplicas;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigReplicas">SpannerInstanceConfigReplicas</a>

---


### SpannerInstanceConfigTimeoutsOutputReference <a name="SpannerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { spannerInstanceConfig } from '@cdktf/provider-google'

new spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts">SpannerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpannerInstanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstanceConfig.SpannerInstanceConfigTimeouts">SpannerInstanceConfigTimeouts</a>

---



