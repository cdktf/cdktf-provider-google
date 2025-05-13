# `networkServicesEndpointPolicy` Submodule <a name="`networkServicesEndpointPolicy` Submodule" id="@cdktf/provider-google.networkServicesEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesEndpointPolicy <a name="NetworkServicesEndpointPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy google_network_services_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

new networkServicesEndpointPolicy.NetworkServicesEndpointPolicy(scope: Construct, id: string, config: NetworkServicesEndpointPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig">NetworkServicesEndpointPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig">NetworkServicesEndpointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putEndpointMatcher">putEndpointMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putTrafficPortSelector">putTrafficPortSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetAuthorizationPolicy">resetAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetClientTlsPolicy">resetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetServerTlsPolicy">resetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetTrafficPortSelector">resetTrafficPortSelector</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointMatcher` <a name="putEndpointMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putEndpointMatcher"></a>

```typescript
public putEndpointMatcher(value: NetworkServicesEndpointPolicyEndpointMatcher): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putEndpointMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher">NetworkServicesEndpointPolicyEndpointMatcher</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesEndpointPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts">NetworkServicesEndpointPolicyTimeouts</a>

---

##### `putTrafficPortSelector` <a name="putTrafficPortSelector" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putTrafficPortSelector"></a>

```typescript
public putTrafficPortSelector(value: NetworkServicesEndpointPolicyTrafficPortSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.putTrafficPortSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector">NetworkServicesEndpointPolicyTrafficPortSelector</a>

---

##### `resetAuthorizationPolicy` <a name="resetAuthorizationPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetAuthorizationPolicy"></a>

```typescript
public resetAuthorizationPolicy(): void
```

##### `resetClientTlsPolicy` <a name="resetClientTlsPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetClientTlsPolicy"></a>

```typescript
public resetClientTlsPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServerTlsPolicy` <a name="resetServerTlsPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetServerTlsPolicy"></a>

```typescript
public resetServerTlsPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficPortSelector` <a name="resetTrafficPortSelector" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.resetTrafficPortSelector"></a>

```typescript
public resetTrafficPortSelector(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isConstruct"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformElement"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformResource"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.generateConfigForImport"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesEndpointPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.endpointMatcher">endpointMatcher</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference">NetworkServicesEndpointPolicyEndpointMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference">NetworkServicesEndpointPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.trafficPortSelector">trafficPortSelector</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.authorizationPolicyInput">authorizationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.clientTlsPolicyInput">clientTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.endpointMatcherInput">endpointMatcherInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher">NetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.serverTlsPolicyInput">serverTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts">NetworkServicesEndpointPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.trafficPortSelectorInput">trafficPortSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector">NetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.authorizationPolicy">authorizationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpointMatcher`<sup>Required</sup> <a name="endpointMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.endpointMatcher"></a>

```typescript
public readonly endpointMatcher: NetworkServicesEndpointPolicyEndpointMatcherOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference">NetworkServicesEndpointPolicyEndpointMatcherOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesEndpointPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference">NetworkServicesEndpointPolicyTimeoutsOutputReference</a>

---

##### `trafficPortSelector`<sup>Required</sup> <a name="trafficPortSelector" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.trafficPortSelector"></a>

```typescript
public readonly trafficPortSelector: NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `authorizationPolicyInput`<sup>Optional</sup> <a name="authorizationPolicyInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.authorizationPolicyInput"></a>

```typescript
public readonly authorizationPolicyInput: string;
```

- *Type:* string

---

##### `clientTlsPolicyInput`<sup>Optional</sup> <a name="clientTlsPolicyInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.clientTlsPolicyInput"></a>

```typescript
public readonly clientTlsPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointMatcherInput`<sup>Optional</sup> <a name="endpointMatcherInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.endpointMatcherInput"></a>

```typescript
public readonly endpointMatcherInput: NetworkServicesEndpointPolicyEndpointMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher">NetworkServicesEndpointPolicyEndpointMatcher</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serverTlsPolicyInput`<sup>Optional</sup> <a name="serverTlsPolicyInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.serverTlsPolicyInput"></a>

```typescript
public readonly serverTlsPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesEndpointPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts">NetworkServicesEndpointPolicyTimeouts</a>

---

##### `trafficPortSelectorInput`<sup>Optional</sup> <a name="trafficPortSelectorInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.trafficPortSelectorInput"></a>

```typescript
public readonly trafficPortSelectorInput: NetworkServicesEndpointPolicyTrafficPortSelector;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector">NetworkServicesEndpointPolicyTrafficPortSelector</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `authorizationPolicy`<sup>Required</sup> <a name="authorizationPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.authorizationPolicy"></a>

```typescript
public readonly authorizationPolicy: string;
```

- *Type:* string

---

##### `clientTlsPolicy`<sup>Required</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.clientTlsPolicy"></a>

```typescript
public readonly clientTlsPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesEndpointPolicyConfig <a name="NetworkServicesEndpointPolicyConfig" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

const networkServicesEndpointPolicyConfig: networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.endpointMatcher">endpointMatcher</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher">NetworkServicesEndpointPolicyEndpointMatcher</a></code> | endpoint_matcher block. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the EndpointPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.type">type</a></code> | <code>string</code> | The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"]. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.authorizationPolicy">authorizationPolicy</a></code> | <code>string</code> | This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>string</code> | A URL referring to a ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#id NetworkServicesEndpointPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#project NetworkServicesEndpointPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | A URL referring to ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts">NetworkServicesEndpointPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.trafficPortSelector">trafficPortSelector</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector">NetworkServicesEndpointPolicyTrafficPortSelector</a></code> | traffic_port_selector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointMatcher`<sup>Required</sup> <a name="endpointMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.endpointMatcher"></a>

```typescript
public readonly endpointMatcher: NetworkServicesEndpointPolicyEndpointMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher">NetworkServicesEndpointPolicyEndpointMatcher</a>

endpoint_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#endpoint_matcher NetworkServicesEndpointPolicy#endpoint_matcher}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the EndpointPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#name NetworkServicesEndpointPolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#type NetworkServicesEndpointPolicy#type}

---

##### `authorizationPolicy`<sup>Optional</sup> <a name="authorizationPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.authorizationPolicy"></a>

```typescript
public readonly authorizationPolicy: string;
```

- *Type:* string

This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#authorization_policy NetworkServicesEndpointPolicy#authorization_policy}

---

##### `clientTlsPolicy`<sup>Optional</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.clientTlsPolicy"></a>

```typescript
public readonly clientTlsPolicy: string;
```

- *Type:* string

A URL referring to a ClientTlsPolicy resource.

ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#client_tls_policy NetworkServicesEndpointPolicy#client_tls_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#description NetworkServicesEndpointPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#id NetworkServicesEndpointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#labels NetworkServicesEndpointPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#project NetworkServicesEndpointPolicy#project}.

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

A URL referring to ServerTlsPolicy resource.

ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#server_tls_policy NetworkServicesEndpointPolicy#server_tls_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesEndpointPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts">NetworkServicesEndpointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#timeouts NetworkServicesEndpointPolicy#timeouts}

---

##### `trafficPortSelector`<sup>Optional</sup> <a name="trafficPortSelector" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyConfig.property.trafficPortSelector"></a>

```typescript
public readonly trafficPortSelector: NetworkServicesEndpointPolicyTrafficPortSelector;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector">NetworkServicesEndpointPolicyTrafficPortSelector</a>

traffic_port_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#traffic_port_selector NetworkServicesEndpointPolicy#traffic_port_selector}

---

### NetworkServicesEndpointPolicyEndpointMatcher <a name="NetworkServicesEndpointPolicyEndpointMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

const networkServicesEndpointPolicyEndpointMatcher: networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher">metadataLabelMatcher</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | metadata_label_matcher block. |

---

##### `metadataLabelMatcher`<sup>Required</sup> <a name="metadataLabelMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher"></a>

```typescript
public readonly metadataLabelMatcher: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

metadata_label_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#metadata_label_matcher NetworkServicesEndpointPolicy#metadata_label_matcher}

---

### NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher <a name="NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

const networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher: networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria">metadataLabelMatchCriteria</a></code> | <code>string</code> | Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"]. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels">metadataLabels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>[]</code> | metadata_labels block. |

---

##### `metadataLabelMatchCriteria`<sup>Required</sup> <a name="metadataLabelMatchCriteria" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria"></a>

```typescript
public readonly metadataLabelMatchCriteria: string;
```

- *Type:* string

Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#metadata_label_match_criteria NetworkServicesEndpointPolicy#metadata_label_match_criteria}

---

##### `metadataLabels`<sup>Optional</sup> <a name="metadataLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels"></a>

```typescript
public readonly metadataLabels: IResolvable | NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>[]

metadata_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#metadata_labels NetworkServicesEndpointPolicy#metadata_labels}

---

### NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels <a name="NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

const networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels: networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName">labelName</a></code> | <code>string</code> | Required. Label name presented as key in xDS Node Metadata. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue">labelValue</a></code> | <code>string</code> | Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. |

---

##### `labelName`<sup>Required</sup> <a name="labelName" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

Required. Label name presented as key in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#label_name NetworkServicesEndpointPolicy#label_name}

---

##### `labelValue`<sup>Required</sup> <a name="labelValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue"></a>

```typescript
public readonly labelValue: string;
```

- *Type:* string

Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#label_value NetworkServicesEndpointPolicy#label_value}

---

### NetworkServicesEndpointPolicyTimeouts <a name="NetworkServicesEndpointPolicyTimeouts" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

const networkServicesEndpointPolicyTimeouts: networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#create NetworkServicesEndpointPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#delete NetworkServicesEndpointPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#update NetworkServicesEndpointPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#create NetworkServicesEndpointPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#delete NetworkServicesEndpointPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#update NetworkServicesEndpointPolicy#update}.

---

### NetworkServicesEndpointPolicyTrafficPortSelector <a name="NetworkServicesEndpointPolicyTrafficPortSelector" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

const networkServicesEndpointPolicyTrafficPortSelector: networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector.property.ports">ports</a></code> | <code>string[]</code> | List of ports. |

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

List of ports.

Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_services_endpoint_policy#ports NetworkServicesEndpointPolicy#ports}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList <a name="NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

new networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get"></a>

```typescript
public get(index: number): NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>[]

---


### NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference <a name="NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

new networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput">labelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput">labelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName">labelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue">labelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelNameInput`<sup>Optional</sup> <a name="labelNameInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput"></a>

```typescript
public readonly labelNameInput: string;
```

- *Type:* string

---

##### `labelValueInput`<sup>Optional</sup> <a name="labelValueInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput"></a>

```typescript
public readonly labelValueInput: string;
```

- *Type:* string

---

##### `labelName`<sup>Required</sup> <a name="labelName" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

---

##### `labelValue`<sup>Required</sup> <a name="labelValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue"></a>

```typescript
public readonly labelValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>

---


### NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference <a name="NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

new networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels">putMetadataLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels">resetMetadataLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetadataLabels` <a name="putMetadataLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels"></a>

```typescript
public putMetadataLabels(value: IResolvable | NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>[]

---

##### `resetMetadataLabels` <a name="resetMetadataLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels"></a>

```typescript
public resetMetadataLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels">metadataLabels</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput">metadataLabelMatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput">metadataLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria">metadataLabelMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataLabels`<sup>Required</sup> <a name="metadataLabels" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels"></a>

```typescript
public readonly metadataLabels: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a>

---

##### `metadataLabelMatchCriteriaInput`<sup>Optional</sup> <a name="metadataLabelMatchCriteriaInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput"></a>

```typescript
public readonly metadataLabelMatchCriteriaInput: string;
```

- *Type:* string

---

##### `metadataLabelsInput`<sup>Optional</sup> <a name="metadataLabelsInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput"></a>

```typescript
public readonly metadataLabelsInput: IResolvable | NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>[]

---

##### `metadataLabelMatchCriteria`<sup>Required</sup> <a name="metadataLabelMatchCriteria" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria"></a>

```typescript
public readonly metadataLabelMatchCriteria: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---


### NetworkServicesEndpointPolicyEndpointMatcherOutputReference <a name="NetworkServicesEndpointPolicyEndpointMatcherOutputReference" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

new networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher">putMetadataLabelMatcher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetadataLabelMatcher` <a name="putMetadataLabelMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher"></a>

```typescript
public putMetadataLabelMatcher(value: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher">metadataLabelMatcher</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput">metadataLabelMatcherInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher">NetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataLabelMatcher`<sup>Required</sup> <a name="metadataLabelMatcher" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher"></a>

```typescript
public readonly metadataLabelMatcher: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a>

---

##### `metadataLabelMatcherInput`<sup>Optional</sup> <a name="metadataLabelMatcherInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput"></a>

```typescript
public readonly metadataLabelMatcherInput: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesEndpointPolicyEndpointMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyEndpointMatcher">NetworkServicesEndpointPolicyEndpointMatcher</a>

---


### NetworkServicesEndpointPolicyTimeoutsOutputReference <a name="NetworkServicesEndpointPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

new networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts">NetworkServicesEndpointPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEndpointPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTimeouts">NetworkServicesEndpointPolicyTimeouts</a>

---


### NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference <a name="NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer"></a>

```typescript
import { networkServicesEndpointPolicy } from '@cdktf/provider-google'

new networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector">NetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesEndpointPolicyTrafficPortSelector;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEndpointPolicy.NetworkServicesEndpointPolicyTrafficPortSelector">NetworkServicesEndpointPolicyTrafficPortSelector</a>

---



