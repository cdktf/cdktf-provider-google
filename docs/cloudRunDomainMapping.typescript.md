# `google_cloud_run_domain_mapping`

Refer to the Terraform Registory for docs: [`google_cloud_run_domain_mapping`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping).

# `cloudRunDomainMapping` Submodule <a name="`cloudRunDomainMapping` Submodule" id="@cdktf/provider-google.cloudRunDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunDomainMapping <a name="CloudRunDomainMapping" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping google_cloud_run_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMapping(scope: Construct, id: string, config: CloudRunDomainMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig">CloudRunDomainMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig">CloudRunDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata"></a>

```typescript
public putMetadata(value: CloudRunDomainMappingMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec"></a>

```typescript
public putSpec(value: CloudRunDomainMappingSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudRunDomainMappingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

cloudRunDomainMapping.CloudRunDomainMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference">CloudRunDomainMappingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference">CloudRunDomainMappingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList">CloudRunDomainMappingStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference">CloudRunDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadata"></a>

```typescript
public readonly metadata: CloudRunDomainMappingMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference">CloudRunDomainMappingMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.spec"></a>

```typescript
public readonly spec: CloudRunDomainMappingSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference">CloudRunDomainMappingSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.status"></a>

```typescript
public readonly status: CloudRunDomainMappingStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList">CloudRunDomainMappingStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunDomainMappingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference">CloudRunDomainMappingTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadataInput"></a>

```typescript
public readonly metadataInput: CloudRunDomainMappingMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.specInput"></a>

```typescript
public readonly specInput: CloudRunDomainMappingSpec;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudRunDomainMappingTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunDomainMappingConfig <a name="CloudRunDomainMappingConfig" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

const cloudRunDomainMappingConfig: cloudRunDomainMapping.CloudRunDomainMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.name">name</a></code> | <code>string</code> | Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#id CloudRunDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#project CloudRunDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#location CloudRunDomainMapping#location}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.metadata"></a>

```typescript
public readonly metadata: CloudRunDomainMappingMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#metadata CloudRunDomainMapping#metadata}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#name CloudRunDomainMapping#name}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.spec"></a>

```typescript
public readonly spec: CloudRunDomainMappingSpec;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#spec CloudRunDomainMapping#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#id CloudRunDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#project CloudRunDomainMapping#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunDomainMappingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#timeouts CloudRunDomainMapping#timeouts}

---

### CloudRunDomainMappingMetadata <a name="CloudRunDomainMappingMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

const cloudRunDomainMappingMetadata: cloudRunDomainMapping.CloudRunDomainMappingMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.namespace">namespace</a></code> | <code>string</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

In Cloud Run the namespace must be equal to either the project ID or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#namespace CloudRunDomainMapping#namespace}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More
info: http://kubernetes.io/docs/user-guide/annotations

*Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#annotations CloudRunDomainMapping#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#labels CloudRunDomainMapping#labels}

---

### CloudRunDomainMappingSpec <a name="CloudRunDomainMappingSpec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

const cloudRunDomainMappingSpec: cloudRunDomainMapping.CloudRunDomainMappingSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.routeName">routeName</a></code> | <code>string</code> | The name of the Cloud Run Service that this DomainMapping applies to. The route must exist. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.certificateMode">certificateMode</a></code> | <code>string</code> | The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"]. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.forceOverride">forceOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the mapping will override any mapping set before this spec was set. |

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.routeName"></a>

```typescript
public readonly routeName: string;
```

- *Type:* string

The name of the Cloud Run Service that this DomainMapping applies to. The route must exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#route_name CloudRunDomainMapping#route_name}

---

##### `certificateMode`<sup>Optional</sup> <a name="certificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.certificateMode"></a>

```typescript
public readonly certificateMode: string;
```

- *Type:* string

The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#certificate_mode CloudRunDomainMapping#certificate_mode}

---

##### `forceOverride`<sup>Optional</sup> <a name="forceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.forceOverride"></a>

```typescript
public readonly forceOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the mapping will override any mapping set before this spec was set.

It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#force_override CloudRunDomainMapping#force_override}

---

### CloudRunDomainMappingStatus <a name="CloudRunDomainMappingStatus" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

const cloudRunDomainMappingStatus: cloudRunDomainMapping.CloudRunDomainMappingStatus = { ... }
```


### CloudRunDomainMappingStatusConditions <a name="CloudRunDomainMappingStatusConditions" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

const cloudRunDomainMappingStatusConditions: cloudRunDomainMapping.CloudRunDomainMappingStatusConditions = { ... }
```


### CloudRunDomainMappingStatusResourceRecords <a name="CloudRunDomainMappingStatusResourceRecords" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

const cloudRunDomainMappingStatusResourceRecords: cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords = { ... }
```


### CloudRunDomainMappingTimeouts <a name="CloudRunDomainMappingTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

const cloudRunDomainMappingTimeouts: cloudRunDomainMapping.CloudRunDomainMappingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#create CloudRunDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#delete CloudRunDomainMapping#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#create CloudRunDomainMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloud_run_domain_mapping#delete CloudRunDomainMapping#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunDomainMappingMetadataOutputReference <a name="CloudRunDomainMappingMetadataOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunDomainMappingMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---


### CloudRunDomainMappingSpecOutputReference <a name="CloudRunDomainMappingSpecOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetCertificateMode">resetCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetForceOverride">resetForceOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateMode` <a name="resetCertificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetCertificateMode"></a>

```typescript
public resetCertificateMode(): void
```

##### `resetForceOverride` <a name="resetForceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetForceOverride"></a>

```typescript
public resetForceOverride(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateModeInput">certificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverrideInput">forceOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeNameInput">routeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateMode">certificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverride">forceOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeName">routeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateModeInput`<sup>Optional</sup> <a name="certificateModeInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateModeInput"></a>

```typescript
public readonly certificateModeInput: string;
```

- *Type:* string

---

##### `forceOverrideInput`<sup>Optional</sup> <a name="forceOverrideInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverrideInput"></a>

```typescript
public readonly forceOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routeNameInput`<sup>Optional</sup> <a name="routeNameInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeNameInput"></a>

```typescript
public readonly routeNameInput: string;
```

- *Type:* string

---

##### `certificateMode`<sup>Required</sup> <a name="certificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateMode"></a>

```typescript
public readonly certificateMode: string;
```

- *Type:* string

---

##### `forceOverride`<sup>Required</sup> <a name="forceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverride"></a>

```typescript
public readonly forceOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeName"></a>

```typescript
public readonly routeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunDomainMappingSpec;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---


### CloudRunDomainMappingStatusConditionsList <a name="CloudRunDomainMappingStatusConditionsList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get"></a>

```typescript
public get(index: number): CloudRunDomainMappingStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunDomainMappingStatusConditionsOutputReference <a name="CloudRunDomainMappingStatusConditionsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions">CloudRunDomainMappingStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunDomainMappingStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions">CloudRunDomainMappingStatusConditions</a>

---


### CloudRunDomainMappingStatusList <a name="CloudRunDomainMappingStatusList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get"></a>

```typescript
public get(index: number): CloudRunDomainMappingStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunDomainMappingStatusOutputReference <a name="CloudRunDomainMappingStatusOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList">CloudRunDomainMappingStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.mappedRouteName">mappedRouteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.observedGeneration">observedGeneration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.resourceRecords">resourceRecords</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList">CloudRunDomainMappingStatusResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus">CloudRunDomainMappingStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: CloudRunDomainMappingStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList">CloudRunDomainMappingStatusConditionsList</a>

---

##### `mappedRouteName`<sup>Required</sup> <a name="mappedRouteName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.mappedRouteName"></a>

```typescript
public readonly mappedRouteName: string;
```

- *Type:* string

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: number;
```

- *Type:* number

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: CloudRunDomainMappingStatusResourceRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList">CloudRunDomainMappingStatusResourceRecordsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunDomainMappingStatus;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus">CloudRunDomainMappingStatus</a>

---


### CloudRunDomainMappingStatusResourceRecordsList <a name="CloudRunDomainMappingStatusResourceRecordsList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get"></a>

```typescript
public get(index: number): CloudRunDomainMappingStatusResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunDomainMappingStatusResourceRecordsOutputReference <a name="CloudRunDomainMappingStatusResourceRecordsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata">rrdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords">CloudRunDomainMappingStatusResourceRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rrdata`<sup>Required</sup> <a name="rrdata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata"></a>

```typescript
public readonly rrdata: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunDomainMappingStatusResourceRecords;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords">CloudRunDomainMappingStatusResourceRecords</a>

---


### CloudRunDomainMappingTimeoutsOutputReference <a name="CloudRunDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudRunDomainMapping } from '@cdktf/provider-google'

new cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunDomainMappingTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a> | cdktf.IResolvable

---



