# `computeNetworkEndpointGroup` Submodule <a name="`computeNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.computeNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEndpointGroup <a name="ComputeNetworkEndpointGroup" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group google_compute_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

new computeNetworkEndpointGroup.ComputeNetworkEndpointGroup(scope: Construct, id: string, config: ComputeNetworkEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig">ComputeNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig">ComputeNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDefaultPort">resetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetNetworkEndpointType">resetNetworkEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeNetworkEndpointGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

---

##### `resetDefaultPort` <a name="resetDefaultPort" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDefaultPort"></a>

```typescript
public resetDefaultPort(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkEndpointType` <a name="resetNetworkEndpointType" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetNetworkEndpointType"></a>

```typescript
public resetNetworkEndpointType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference">ComputeNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPortInput">defaultPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPort">defaultPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkEndpointGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference">ComputeNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `defaultPortInput`<sup>Optional</sup> <a name="defaultPortInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPortInput"></a>

```typescript
public readonly defaultPortInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```typescript
public readonly networkEndpointTypeInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeNetworkEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `defaultPort`<sup>Required</sup> <a name="defaultPort" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPort"></a>

```typescript
public readonly defaultPort: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEndpointGroupConfig <a name="ComputeNetworkEndpointGroupConfig" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.Initializer"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

const computeNetworkEndpointGroupConfig: computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.network">network</a></code> | <code>string</code> | The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.defaultPort">defaultPort</a></code> | <code>number</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | Optional subnetwork to which all network endpoints in the NEG belong. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.zone">zone</a></code> | <code>string</code> | Zone where the network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#name ComputeNetworkEndpointGroup#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#network ComputeNetworkEndpointGroup#network}

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.defaultPort"></a>

```typescript
public readonly defaultPort: number;
```

- *Type:* number

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#default_port ComputeNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#description ComputeNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkEndpointType`<sup>Optional</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

Type of network endpoints in this network endpoint group.

NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.

Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP", "GCE_VM_IP_PORT", "NON_GCP_PRIVATE_IP_PORT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "SERVERLESS", "PRIVATE_SERVICE_CONNECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#network_endpoint_type ComputeNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Optional subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#subnetwork ComputeNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkEndpointGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#timeouts ComputeNetworkEndpointGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#zone ComputeNetworkEndpointGroup#zone}

---

### ComputeNetworkEndpointGroupTimeouts <a name="ComputeNetworkEndpointGroupTimeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.Initializer"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

const computeNetworkEndpointGroupTimeouts: computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#create ComputeNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#delete ComputeNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#create ComputeNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_network_endpoint_group#delete ComputeNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeNetworkEndpointGroup } from '@cdktf/provider-google'

new computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

---



